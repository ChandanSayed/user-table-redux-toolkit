import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteUsers } from '../users/slices/UsersSlice';

const DeleteAllUsers = () => {
  const dispatch = useDispatch();
  function deleteAll() {
    dispatch(deleteUsers());
  }

  return (
    <Wrapper>
      <button className="btn" onClick={deleteAll}>
        DeleteAllUsers
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  button {
    margin-top: 1.5rem;
    background-color: #db338a;
  }
`;

export default DeleteAllUsers;
