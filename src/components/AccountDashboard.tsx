import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { accounts } from '../data/accounts';
import { cards } from '../data/cards';

const AccountDashboard = () => {
  const [selectedAccount, setSelectedAccount] = useState(null);

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
            <CardContent className="card-content">
            <div className="flex space-between">
                <div className="truncate">
                <h2 className="text-md font-semibold">{account.first_name} {account.last_name}</h2>
                <p className="text-gray-600 text-sm">{account.original_lender}</p>
                </div>
                <div className="text-right whitespace-nowrap">
                <p className="text-md font-semibold text-red-600"> Due: {formatCurrency(account.debt_due)}</p>
                <p className="text-gray-600 text-sm">{formatDate(account.due_since)}</p>
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="w-full md:w-auto">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <button 
                onClick={() => setSelectedAccount(null)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <ArrowLeft size={20} />
                  Back to Accounts
                </div>
              </button>
            </div>
           
          </div>
          <h1 className="text-2xl font-bold text-center">Account Details</h1>
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <div className="text-center md:text-right">
              <img 
                src={`/qr-codes/${account.consumer_id}.svg`}
                alt="Account QR Code"
                className="w-32 h-32 rounded-lg shadow-md"
              />
              <p className="mt-2 text-sm text-gray-600">{account.number_to_call}</p>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                <div className="space-y-2">
                  <p className="flex">
                    <span className="font-medium w-24 text-left">Name:</span>
                    <span>{account.first_name} {account.last_name}</span>
                  </p>
                  <div className="flex">
                    <span className="font-medium w-24 text-left">Address:</span>
                    <span className="flex-1">{account.address}</span>
                  </div>
                  <p className="flex">
                    <span className="font-medium w-24 text-left">SSN:</span>
                    <span>{formatSSN(account.ssn)}</span>
                  </p>
                  <div className="flex items-center text-blue-600">
                    <div className="w-24 flex items-center gap-2">
                      <Mail size={16} />
                      <span className="font-medium">:</span>
                    </div>
                    <a href={`mailto:${account.email}`} className="hover:underline">{account.email}</a>
                  </div>
                  <div className="flex items-center text-blue-600">
                    <div className="w-24 flex items-center gap-2">
                      <Phone size={16} />
                      <span className="font-medium">:</span>
                    </div>
                    <a href={`tel:${account.number_to_call}`} className="hover:underline">{account.number_to_call}</a>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Account Information</h2>
                <div className="space-y-3">
                  <p className="flex">
                    <span className="font-medium w-40">Reference Number:</span>
                    <span className="flex-1">{account.reference_number}</span>
                  </p>
                  <p className="flex">
                    <span className="font-medium w-40">Account ID:</span>
                    <span className="flex-1">{account.account_id}</span>
                  </p>
                  <p className="flex">
                    <span className="font-medium w-40">Account Type:</span>
                    <span className="capitalize flex-1">{account.account_type.replace('_', ' ')}</span>
                  </p>
                  <p className="flex">
                    <span className="font-medium w-40">Original Lender:</span>
                    <span className="flex-1">{account.original_lender}</span>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="border-t pt-6">
          <h3 className="text-xl font-semibold mb-4">Financial Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-medium text-gray-600 mb-2">Current Amount Due</h4>
                <p className="text-2xl font-bold text-red-600">{formatCurrency(account.debt_due)}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <h4 className="font-medium text-gray-600 mb-2">Original Amount</h4>
                <p className="text-2xl font-bold text-blue-600">{formatCurrency(account.original_amount_due)}</p>
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
          <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card, index) => (
              <Card key={index} className={!card.is_accepted ? 'bg-gray-50' : 'bg-white'}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <CreditCard className={!card.is_accepted ? 'text-gray-400' : 'text-blue-600'} />
                    <span className={`text-sm ${!card.is_accepted ? 'text-red-600' : 'text-green-600'}`}>
                      {card.response === "Successful" ? "Valid Card" : "Invalid Card"}
                    </span>
                  </div>
                  <p className="mt-4 font-mono">{card.card_number}</p>
                  
                  <p className="text-sm text-gray-600 mt-2">CVV: {card.cvv}</p>
                  <p className="text-sm text-gray-600 mt-2">Expires: {card.expiry}</p>
                  <p className="text-sm  text-right text-bold mt-2">{card.network}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
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