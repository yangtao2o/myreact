const Home = props => <h1>Hello Next! I'am {props.userName}</h1>;
const timeout = (ms, result) => {
  return new Promise(resolve => setTimeout(() => resolve(result), ms));
};
Home.getInitialProps = async () => {
  return await timeout(200, { userName: "Yang Tao" });
};
export default Home;
