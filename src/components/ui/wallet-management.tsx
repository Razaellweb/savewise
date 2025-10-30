export default function WalletManagement() {
  return (
    <div className="relative min-h-[600px] rounded-t-xl bg-white p-8 shadow-2xl">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between border-b border-teal-100 pb-4">
        <div>
          <h2 className="text-2xl font-semibold text-teal-900">My Wallets</h2>
          <p className="text-sm text-teal-600">Manage your NGN and crypto assets</p>
        </div>
        <div className="rounded-lg bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700">
          Tier 2 Verified ✓
        </div>
      </div>

      {/* Total Balance Card */}
      <div className="mb-6 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 p-6 text-white shadow-lg">
        <div className="mb-2 text-sm opacity-90">Total Balance</div>
        <div className="mb-4 text-4xl font-bold">₦3,245,800</div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
            <span className="opacity-90">~$2,164 USD</span>
          </div>
          <div className="text-green-300">+2.3% today</div>
        </div>
      </div>

      {/* Wallets Grid */}
      <div className="mb-6 space-y-3">
        {/* NGN Wallet */}
        <div className="rounded-xl border border-teal-200 bg-gradient-to-r from-teal-50 to-white p-5 transition-all hover:shadow-md">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <span className="text-xl font-bold text-green-700">₦</span>
              </div>
              <div>
                <div className="font-semibold text-teal-900">Nigerian Naira</div>
                <div className="text-xs text-teal-600">Virtual Account • Providus Bank</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-teal-900">₦1,245,800</div>
              <div className="text-xs text-teal-600">Available</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 rounded-lg bg-teal-600 px-3 py-2 text-sm font-medium text-white hover:bg-teal-700">
              Deposit
            </button>
            <button className="flex-1 rounded-lg border border-teal-300 bg-white px-3 py-2 text-sm font-medium text-teal-700 hover:bg-teal-50">
              Withdraw
            </button>
            <button className="rounded-lg border border-teal-300 bg-white px-3 py-2 text-sm text-teal-700 hover:bg-teal-50">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* USDC Wallet */}
        <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-white p-5 transition-all hover:shadow-md">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="#2775CA"/>
                  <path d="M12 4a8 8 0 100 16 8 8 0 000-16zm0 14.4a6.4 6.4 0 110-12.8 6.4 6.4 0 010 12.8z" fill="white"/>
                  <path d="M14.4 9.6h-2.4V8h2.4v1.6zm0 6.4h-2.4v-4.8h2.4V16z" fill="white"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-teal-900">USD Coin</div>
                <div className="text-xs text-teal-600">Polygon • Multi-chain</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-teal-900">$1,200.50</div>
              <div className="text-xs text-teal-600">Available</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Deposit
            </button>
            <button className="flex-1 rounded-lg border border-blue-300 bg-white px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50">
              Withdraw
            </button>
            <button className="rounded-lg border border-blue-300 bg-white px-3 py-2 text-sm text-blue-700 hover:bg-blue-50">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* USDT Wallet */}
        <div className="rounded-xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-white p-5 transition-all hover:shadow-md">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <svg className="h-6 w-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="#26A17B"/>
                  <path d="M13.5 9.5V7h3.2c.7 0 1.3.6 1.3 1.3v.9h-4.5zm-3 0h-4.5v-.9c0-.7.6-1.3 1.3-1.3h3.2v2.2zm4.5 3v5h-6v-5h6zm1.5-1.5h-9v-.5h9v.5z" fill="white"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-teal-900">Tether USD</div>
                <div className="text-xs text-teal-600">Tron • Multi-chain</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-teal-900">$800.00</div>
              <div className="text-xs text-teal-600">Available</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700">
              Deposit
            </button>
            <button className="flex-1 rounded-lg border border-emerald-300 bg-white px-3 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50">
              Withdraw
            </button>
            <button className="rounded-lg border border-emerald-300 bg-white px-3 py-2 text-sm text-emerald-700 hover:bg-emerald-50">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 rounded-lg bg-teal-50 p-4">
        <div>
          <div className="text-xs text-teal-600">Total Deposits (30d)</div>
          <div className="text-lg font-bold text-teal-900">₦5,240,000</div>
        </div>
        <div>
          <div className="text-xs text-teal-600">Total Withdrawals (30d)</div>
          <div className="text-lg font-bold text-teal-900">₦2,890,000</div>
        </div>
      </div>
    </div>
  );
}
