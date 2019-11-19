import React from 'react';
import { Input } from 'antd';
const { Search } = Input;

type Props = {
  placeholder: string,
  onSearch: (value: string) => void,
}

class SearchInput extends React.Component<Props> {

  render() {
    const { placeholder, onSearch } = this.props;

    return (
      <Search
        placeholder={placeholder}
        onSearch={onSearch}
      />
    );
  }

}

export default SearchInput;
