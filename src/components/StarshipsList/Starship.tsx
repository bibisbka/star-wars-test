import React from 'react'
import {InitialStateResultType} from "../../types/types";
import {Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";

export const Starship: React.FC<InitialStateResultType> = ({
                                                             name,
                                                             manufacturer,
                                                             passengers,
                                                             starship_class,
                                                             model,
                                                             hyperdrive_rating
                                                           }) => {
  return (
    <div>
      <Card body outline color='danger'>
        <CardTitle>
          {name}
        </CardTitle>
        <CardSubtitle>
          {model}
        </CardSubtitle>
        <CardText>
          STARSHIP CLASS: {starship_class}
        </CardText>
        <CardText>
          HYPERDRIVE RATING: {hyperdrive_rating}
        </CardText>
        <CardText>
          PASSENGERS: {passengers}
        </CardText>
        <CardText>
          MANUFACTURER: {manufacturer}
        </CardText>
      </Card>
    </div>
  )
}
