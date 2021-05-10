import React, {useEffect} from 'react'
import {InitialStateType} from '../../types/types'
import {Starship} from "./Starship";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppState} from "../../redux/store";
import {getStarships, setNewPage} from '../../redux/slice';
import {Pagination, PaginationLink} from "reactstrap";
import {Col, Container, Row} from "react-bootstrap";
import styles from './starship.module.css'


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
    <div>
      {loading ? (
        <div> loading... </div>
      ) : (<>
        <Container fluid className={styles.container}>
          <Row className={styles.row}>
            {results.map(s =>
              <Col lg={3} md={4} xs={6} className={styles.col}>
                <Starship name={s.name}
                          model={s.model}
                          starship_class={s.starship_class}
                          hyperdrive_rating={s.hyperdrive_rating}
                          passengers={s.passengers}
                          manufacturer={s.manufacturer}/>
              </Col>
            )}
          </Row>
        </Container>
        <Container fluid className={styles.container}>
          <Pagination>
            <Row>
              {previous ?
                <Col className="col-8">
                  <PaginationLink previous onClick={handlePreviousButton}/>
                </Col> : null}
              {next ?
                <Col className="col-4">
                  <PaginationLink next onClick={handleNextButton}/>
                </Col> : null}
            </Row>
          </Pagination>
        </Container>
      </>)}
    </div>
  )
}
