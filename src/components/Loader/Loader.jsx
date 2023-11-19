import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="64"
      width="64"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{
        margin: '0 auto',
      }}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#000000"
      color="#8c3fb5"
    />
  );
};
