import { useSelector } from 'react-redux';
import styled from 'styled-components';

const DisplayUsers = () => {
  const data = useSelector(state => {
    return state.users;
  });
  console.log(data);
  return (
    <>
      {data.map((user, id) => {
        return <Li key={id}>{user}</Li>;
      })}
    </>
  );
};

export default DisplayUsers;

const Li = styled.li``;
