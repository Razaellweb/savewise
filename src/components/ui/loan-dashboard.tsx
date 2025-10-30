export default function LoanDashboard() {
  return (
    <div className="relative min-h-[600px] rounded-t-xl bg-white p-8 shadow-2xl">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between border-b border-teal-100 pb-4">
        <h2 className="text-2xl font-semibold text-teal-900">My Loans</h2>
        <div className="flex gap-2">
          <div className="rounded-lg bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700">
            Active
          </div>
          <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-600">
            History
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="mb-8 grid grid-cols-3 gap-4">
        <div className="rounded-xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-4">
          <div className="mb-1 text-sm text-teal-600">Total Borrowed</div>
          <div className="text-2xl font-bold text-teal-900">₦850,000</div>
          <div className="text-xs text-teal-500">~$566 USD</div>
        </div>
        <div className="rounded-xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-4">
          <div className="mb-1 text-sm text-teal-600">Collateral Value</div>
          <div className="text-2xl font-bold text-teal-900">$765</div>
          <div className="text-xs text-green-600">135% LTV ✓</div>
        </div>
        <div className="rounded-xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-4">
          <div className="mb-1 text-sm text-teal-600">Next Payment</div>
          <div className="text-2xl font-bold text-teal-900">₦45,200</div>
          <div className="text-xs text-orange-500">Due in 3 days</div>
        </div>
      </div>

      {/* Active Loan Card */}
      <div className="rounded-xl border border-teal-200 bg-gradient-to-br from-teal-50/50 to-white p-6 shadow-sm">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <div className="mb-1 text-sm font-medium text-teal-600">Loan #YF-2401-089</div>
            <div className="text-xl font-bold text-teal-900">₦850,000</div>
          </div>
          <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            ACTIVE
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-teal-600">Repayment Progress</span>
            <span className="font-medium text-teal-900">6 of 10 days</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-teal-100">
            <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-teal-500 to-teal-400"></div>
          </div>
        </div>

        {/* Loan Details Grid */}
        <div className="grid grid-cols-2 gap-4 border-t border-teal-100 pt-4">
          <div>
            <div className="text-xs text-teal-600">Interest Rate</div>
            <div className="font-semibold text-teal-900">0.4% daily</div>
          </div>
          <div>
            <div className="text-xs text-teal-600">Collateral</div>
            <div className="font-semibold text-teal-900">USDC</div>
          </div>
          <div>
            <div className="text-xs text-teal-600">Total Repayable</div>
            <div className="font-semibold text-teal-900">₦884,000</div>
          </div>
          <div>
            <div className="text-xs text-teal-600">Collateral Health</div>
            <div className="font-semibold text-green-600">Healthy 135%</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 flex gap-3">
        <button className="flex-1 rounded-lg bg-teal-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-700">
          Make Payment
        </button>
        <button className="flex-1 rounded-lg border border-teal-300 bg-white px-4 py-3 text-sm font-semibold text-teal-700 transition-all hover:bg-teal-50">
          View Details
        </button>
      </div>
    </div>
  );
}
