import React, {useEffect} from 'react'
import {Starships} from "./Starships";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {getStarships} from "../../redux/slice";

export const StarshipsContainer:React.FC=()=>{
  const dispatch=useDispatch<AppDispatch>()
  useEffect(()=>{dispatch(getStarships())},[dispatch])
  return <Starships/>
}
