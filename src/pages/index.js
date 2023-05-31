import { lazy } from 'react';

export const Homepage = lazy(() => import("./Homepage/Homepage"));
export const Contact = lazy(() => import("./Contact/Contact"));
export const Login = lazy(() => import("./Login/Login"));
export const Places = lazy(() => import("./Places/Places"));
export const Signup = lazy(() => import("./Signup/Signup"));
export const Items = lazy(() => import("./Items/Items"));
export const PlaceDetailPg=lazy(() =>import("./PlaceDetailPg/PlaceDetailPg"))
export const ProfilePg =lazy(()=>import('./ProfilePg/ProfilePg'))
export const BecomGuidePg =lazy(()=>import('./BecomeGuidePg/BecomGuidePg'))