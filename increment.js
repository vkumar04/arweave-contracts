export function handle(state, action){
  const balances = state.balances;
  const qty = action.input.qty;
  const input = action.input;
  const caller = action.caller;

  if (input.function === 'increment') {
    if(caller in balances){
      balances[caller] += qty;
    } else {
      balances[caller] = 1;
    }
  }
}