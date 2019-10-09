import React from 'react';
import { Select } from 'antd';
import { Title } from './elements';
const { Option } = Select;

type Props = {
  onFilter: (value: string) => void,
}

class Filter extends React.Component<Props> {

  onChange = (value: string) => {
    this.props.onFilter(value)
  };

  render() {
    return (
      <div>
        <Title>Traveled with:</Title>
        <Select
          allowClear={true}
          style={{ width: 200 }}
          placeholder="Select type"
          optionFilterProp="children"
          onChange={this.onChange}
        >
          <Option value="FAMILY">FAMILY</Option>
          <Option value="FRIENDS">FRIENDS</Option>
          <Option value="OTHER">OTHER</Option>
          <Option value="COUPLE">COUPLE</Option>
          <Option value="SINGLE">SINGLE</Option>
        </Select>
      </div>

    );
  }
}

export default Filter;
