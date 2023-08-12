import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface QuestionState {
  currentQuestionTitle: string;
  currentQuestionLink: string;
}

const initialState: QuestionState = {
  currentQuestionTitle: "231232132 11321213213123122312 132313213123 1231231",
  currentQuestionLink: "1",
};

const QuestionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    getTitle: (state, action: PayloadAction<string>) => {
      state.currentQuestionTitle = action.payload;
    },
    getLink: (state, action: PayloadAction<string>) => {
      state.currentQuestionLink = action.payload;
    },
  },
});

export default QuestionSlice.reducer;
export const { getTitle, getLink } = QuestionSlice.actions;
