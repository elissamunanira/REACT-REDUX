import { useGetProductByIdQuery } from "../app/service/dummyData";

const SpecificProduct = () => {
  const {data, isLoading, isError} = useGetProductByIdQuery (2);
  console.log(data);
  if (isError){
    return <h1> OoohNooooo we got an error</h1>;
    }

    if (isLoading){
        return <h1>Loading...</h1>;
    }
    return <div>
      <h1>{ data?.brand}</h1>
      <h1>{ data?.category} </h1>
      <h2>{ data?.description} </h2>
    </div>;
    };

export default SpecificProduct
