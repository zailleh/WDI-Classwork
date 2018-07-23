class Bank
  attr_reader :name, :accounts

  def initialize(name = nil)
    @name = name
    @accounts = Hash.new(0)
  end

  def create_account(account_name, amount = 0)
    @accounts[account_name] = amount
  end

  def deposit(account_name, amount)
    @accounts[account_name] += amount
  end

  def withdraw(account_name, amount)
    @accounts[account_name] -= amount
  end
end