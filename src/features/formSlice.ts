import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  phone: string;
  firstName: string;
  lastName: string;
  gender: string;
  workplace: string;
  address: string;
  loanAmount: number;
  loanTerm: number;
}

const initialState: FormState = {
  phone: '',
  firstName: '',
  lastName: '',
  gender: '',
  workplace: '',
  address: '',
  loanAmount: 200,
  loanTerm: 10,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm(state, action: PayloadAction<Partial<FormState>>) {
      Object.assign(state, action.payload);
    },
  },
});

export const { updateForm } = formSlice.actions;
export default formSlice.reducer;
