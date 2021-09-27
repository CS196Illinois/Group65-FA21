import '../App.css';

const styles = {
    AgeParagraph: {color: 'red'},
    BlueParagraph: {color: 'blue'},
};

export default function Parent(props) {
  console.log(props);

  return (
    <div style={styles.AgeParagraph}>
      <h1>Hi! My name is {props.name}</h1>
      <p>I am {props.age} years old</p>
      <p style={styles.BlueParagraph}>I am a {props.major} major</p>
    </div>
  );
}