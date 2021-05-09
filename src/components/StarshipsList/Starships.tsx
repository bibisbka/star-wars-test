import React, {useEffect} from 'react'
import {InitialStateType} from '../../types/types'
import {Starship} from "./Starship";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppState} from "../../redux/store";
import {getStarships, setNewPage} from '../../redux/slice';
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";

export const Starships: React.FC = () => {
  const {
    page,
    loading,
    next,
    previous,
    results
  } = useSelector<AppState, InitialStateType>(state => state.starships)
  useEffect(() => {
    dispatch(getStarships(page))
  }, [page])
  const dispatch = useDispatch<AppDispatch>()
  const handlePreviousButton = () => {
    dispatch(setNewPage(page - 1))
  }
  const handleNextButton = () => {
    dispatch(setNewPage(page + 1))
  }
  return (
    <>
      {loading ? (
        <div> loading... </div>
      ) : (
        <div>
          {results.map(s => <Starship hyperdrive_rating={s.hyperdrive_rating}
                                      manufacturer={s.manufacturer}
                                      model={s.model}
                                      name={s.name}
                                      passengers={s.passengers}
                                      starship_class={s.starship_class}
                                      key={s.name}/>)}
          ---------------
          <Pagination>
            {previous?<PaginationItem>
              <PaginationLink previous onClick={handlePreviousButton}/>
            </PaginationItem>:null}
            {next?<PaginationItem>
              <PaginationLink next onClick={handleNextButton}/>
            </PaginationItem>:null}
          </Pagination>
        </div>)}
    </>
  )
}
