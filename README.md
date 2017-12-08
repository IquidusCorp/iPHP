# Iquidus (iPHP)

iPHP is an ERC20 token with the standard API:

<h1><b>Methods</b></h1>

<b>totalSupply</b>

function totalSupply() constant returns (uint256 totalSupply)
Get the total token supply

<b>balanceOf</b>

function balanceOf(address _owner) constant returns (uint256 balance)
Get the account balance of another account with address _owner

<b>transfer</b>

function transfer(address _to, uint256 _value) returns (bool success)
Send _value amount of tokens to address _to

<b>transferFrom</b>

function transferFrom(address _from, address _to, uint256 _value) returns (bool success)
Send _value amount of tokens from address _from to address _to

The transferFrom method is used for a withdraw workflow, allowing contracts to send tokens on your behalf, for example to "deposit" to a contract address and/or to charge fees in sub-currencies; the command should fail unless the _from account has deliberately authorized the sender of the message via some mechanism; we propose these standardized APIs for approval:

<b>approve</b>

function approve(address _spender, uint256 _value) returns (bool success)
Allow _spender to withdraw from your account, multiple times, up to the _value amount. If this function is called again it overwrites the current allowance with _value.

<b>allowance</b>

function allowance(address _owner, address _spender) constant returns (uint256 remaining)
Returns the amount which _spender is still allowed to withdraw from _owner

<h1><b>Events</b></h1>

<b>Transfer</b>

event Transfer(address indexed _from, address indexed _to, uint256 _value)
Triggered when tokens are transferred.

<b>Approval</b>

event Approval(address indexed _owner, address indexed _spender, uint256 _value)
Triggered whenever approve(address _spender, uint256 _value) is called.
