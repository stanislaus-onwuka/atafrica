import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const DonutValue = ({ valueKey, value }) => {
  const updatedKey = valueKey.split('_').join(' ')

  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: 150, height: 150 }}>
      <CircularProgressbar value={value} text={`${value}%`} />
      <h4 style={{ marginTop: '32px', textTransform: 'capitalize' }}>{updatedKey}</h4>
    </div>
  )
}

export default DonutValue