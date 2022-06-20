import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

const CustomCard = ({uri, movieTitle, onPress, style, year, type}) => {

return(
    <Card style={{...style, margin: 10}} onPress = {onPress}>
      <Card.Title title={movieTitle} 
       />
      <Card.Cover source={{ uri }} />
      <Card.Content>
        <Title>{movieTitle}</Title> 
        { year && <Paragraph>Year: {year}</Paragraph>}
         { type && <Paragraph>Type: {type}</Paragraph>}
      </Card.Content>
    </Card>
  )
}

export default CustomCard;