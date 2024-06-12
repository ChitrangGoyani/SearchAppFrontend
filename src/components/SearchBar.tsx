import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex justify-center gap-4 mb-4'>
        <Input
          className='w-96'
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        <Button className="flex-initial" type="submit">Search</Button>
      </div>
    </form>
  );
};

export default SearchBar;
