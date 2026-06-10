import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Tournament {
  _id?: string;
  id?: string;
  name?: string;
  title?: string;
  match_name?: string;
  createdAt?: string;
  updatedAt?: string;
  description: string;
  short_name: string;
}

interface TournamentState {
  tournamentList: Tournament[];
}

const initialState: TournamentState = {
  tournamentList: [],
};

export const tournamentSlice = createSlice({
  name: 'tournament',
  initialState,
  reducers: {
    setTournament: (state, action: PayloadAction<Tournament[]>) => {
      state.tournamentList = action.payload;
    },
    clearTournament: state => {
      state.tournamentList = [];
    },
  },
});

export const { setTournament, clearTournament } = tournamentSlice.actions;
export default tournamentSlice.reducer;
