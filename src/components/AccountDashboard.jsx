import React, { useState, useEffect } from 'react';
import { ArrowLeft, Phone, Mail, CreditCard } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Papa from 'papaparse';

const AccountDashboard = () => {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);

  useEffect(() => {
    const loadAccounts = async () => {
      try {
        const response = await fetch('/Sample data for Voice-bot - Consumers.csv');
        const csvText = await response.text();
        const result = Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true
        });
        setAccounts(result.data);
      } catch (error) {
        console.error('Error loading accounts:', error);
      }
    };
    loadAccounts();
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatSSN = (ssn) => {
    return `***-**-${String(ssn).padStart(4, '0')}`;
  };

  const AccountList = () => (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-6">Account Dashboard</h1>
      {accounts.map(account => (
        <Card 
          key={account.account_id}
          className="hover:bg-gray-50 cursor-pointer transition-colors"
          onClick={() => setSelectedAccount(account)}
        >
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{account.first_name} {account.last_name}</h2>
                <p className="text-gray-600">Ref #{account.reference_number}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">{formatCurrency(account.debt_due)}</p>
                <p className="text-gray-600">{account.original_lender}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const AccountDetail = ({ account }) => {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSelectedAccount(null)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Accounts
            </button>
            <h1 className="text-2xl font-bold">Account Details</h1>
          </div>
          <img 
            src={`/qr-codes/${account.consumer_id}.jpg`}
            alt="Account QR Code"
            className="w-32 h-32 rounded-lg shadow-md"
          />
        </div>

        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Personal Information</h2>
                <div className="space-y-2">
                  <p><span className="font-medium">Name:</span> {account.first_name} {account.last_name}</p>
                  <p><span className="font-medium">Address:</span> {account.address}</p>
                  <p><span className="font-medium">SSN:</span> {formatSSN(account.ssn)}</p>
                  <div className="flex items-center gap-2 text-blue-600">
                    <Mail size={16} />
                    <a href={`mailto:${account.email}`} className="hover:underline">{account.email}</a>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600">
                    <Phone size={16} />
                    <a href={`tel:${account.number_to_call}`} className="hover:underline">{account.number_to_call}</a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Account Information</h2>
                <div className="space-y-2">
                  <p><span className="font-medium">Reference Number:</span> {account.reference_number}</p>
                  <p><span className="font-medium">Account ID:</span> {account.account_id}</p>
                  <p><span className="font-medium">Account Type:</span> {account.account_type}</p>
                  <p><span className="font-medium">Original Lender:</span> {account.original_lender}</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-4">Financial Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium text-gray-600 mb-2">Current Amount Due</h4>
                    <p className="text-2xl font-bold text-blue-600">{formatCurrency(account.debt_due)}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium text-gray-600 mb-2">Original Amount</h4>
                    <p className="text-2xl font-bold">{formatCurrency(account.original_amount_due)}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium text-gray-600 mb-2">Due Since</h4>
                    <p className="text-2xl font-bold">{formatDate(account.due_since)}</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-4">Credit Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(5)].map((_, index) => (
                  <Card key={index} className={index >= 3 ? 'bg-gray-50' : 'bg-white'}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <CreditCard className={index >= 3 ? 'text-gray-400' : 'text-blue-600'} />
                        <span className={`text-sm ${index >= 3 ? 'text-red-600' : 'text-green-600'}`}>
                          {index >= 3 ? 'Invalid' : 'Valid'}
                        </span>
                      </div>
                      <p className="mt-4 font-mono">**** **** **** {(1234 + index).toString().padStart(4, '0')}</p>
                      <p className="text-sm text-gray-600 mt-2">Expires: {`${Math.floor(Math.random() * 12 + 1).toString().padStart(2, '0')}/25`}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {selectedAccount ? (
        <AccountDetail account={selectedAccount} />
      ) : (
        <AccountList />
      )}
    </div>
  );
};

export default AccountDashboard;