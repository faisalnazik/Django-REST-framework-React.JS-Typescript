import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api, {
  API_LOGIN,
  API_LOGOUT,
  API_REGISTER,
  API_GUEST_REGISTER,
} from "./../../api";

import { AxiosError } from "axios";
