require_relative '../bank'

describe Bank do
  let(:bank) { Bank.new 'TDD Bank' }

  describe '.new' do
    it "creates a new bank object" do
      expect(bank.class).to be Bank
    end

    it 'assigns the bank a name' do
      expect(bank.name).to eq 'TDD Bank'
    end
  end

  describe '#create_account' do
    it "creates a new account for a particular person with a balance" do
      bank.create_account 'Craigsy', 200

      expect(bank.accounts['Craigsy']).to eq 200
    end
  end

  describe '#deposit' do
    it "allows desposits into an account" do
      bank.create_account 'Craigsy', 200
      bank.deposit 'Craigsy', 200

      expect(bank.accounts['Craigsy']).to eq (200+200)
    end
  end

  describe '#withdraw' do
    it "withdraws money from an account" do
      bank.create_account 'Craigsy', 200
      bank.withdraw 'Craigsy', 100

      expect(bank.accounts['Craigsy']).to eq (200 - 100);
    end

    it "cannot withdraw more than the balance" do
      bank.create_account 'Craigsy', 1
      bank.withdraw 'Craigsy', 1_000_000

      expect(bank.balance 'Craigsy' ).to eq 1
    end
  end

  describe '#balance' do
    it "returns balance for some account" do
      bank.create_account 'Craigsy', 200
      
      expect(bank.balance 'Craigsy').to eq 200
    end

  end

end

# b = Bank.new # Class Method
# b.create_account 'Fred', 1000 # Instance Method
# b.withdraw 'Fred', 15
