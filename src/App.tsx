import { useState } from 'react';
import './App.css';
import SearchBar from '@/components/SearchBar';
import axios from 'axios';
import CandidateCard from '@/components/CandidateCard';

export type Candidate = {
  desiredPosition: string,
  experience: string,
  firstName: string,
  lastName: string,
  location: string,
  id: number
}

function App() {

  const [loadingSearchResults, setLoadingSearchResults] = useState(false);
  const [data, setData] = useState<Candidate[] | null>(null);

  const callSearchApi = async (searchTerm: string) => {
    setLoadingSearchResults(true);
    try{
      const response = await axios.post('http://localhost:3000/search', {
        query: searchTerm,
        fields: 'location,desiredposition^0.5'
      }, { headers: {
        'content-type': 'application/json',
      }});
      setData(response.data.users);
    } catch(error) {
      console.log(error);
    } finally {
      setLoadingSearchResults(false);
    }
  }

  const renderResults = () => {
    if(data) {
      const resultElements: JSX.Element[] = [];
      data.forEach((item, index) => {
        resultElements.push(
          <div key={index}>
            <CandidateCard data={item}></CandidateCard>
          </div>
        );
      });
      return resultElements;
    }
    return null;
  };


  return (
    <>
      <div className='flex flex-col w-full'>
        <h1 className='w-full mb-4'>Talent Search</h1>
        <SearchBar onSearch={callSearchApi} />
        {loadingSearchResults ? (
          <div className="spinner">Loading...</div> // Replace with your spinner component
        ) : (
          <div className="flex flex-wrap justify-center gap-4">
            {renderResults()}
          </div>
        )}
      </div>
    </>
  )
}

export default App
