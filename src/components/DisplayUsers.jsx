import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { removeUser } from '../store/slices/UsersSlice';

const DisplayUsers = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => {
    return state.users;
  });
  function deleteUser(id) {
    dispatch(removeUser(id));
  }
  return (
    <>
      {data.map((user, id) => {
        return (
          <Li key={id}>
            {user} <button onClick={() => deleteUser(id)}>Delete</button>
          </Li>
        );
      })}
    </>
  );
};

export default DisplayUsers;

const Li = styled.li`
  margin: 8px 0;
`;
