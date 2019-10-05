import { List as AntList } from 'antd';
import React from 'react';
import Comment from './Comment';
import { inject, observer } from 'mobx-react';
import { ReviewsComments, Resource } from '../../../../typings/reviewsComments';

type Props = {
  comments: ReviewsComments,
  loaded: boolean,
  onPageChanged: (page: number) => void,
  currentPage: number,
};

@observer
class Comments extends React.Component<Props> {

  render() {
    const { comments, loaded, onPageChanged, currentPage }  = this.props;
    const { resources, meta } = comments;

    return (
      <AntList
        itemLayout="vertical"
        size="large"
        loading={!loaded}
        pagination={loaded && {
          onChange: page => {
            onPageChanged(page);
          },
          pageSize: +meta.limit || 20,
          total: meta.totalItems,
          current: currentPage,
        }}
        dataSource={resources}
        renderItem={(item: Resource) => (
          <AntList.Item key={item.id}>
            <Comment comment={item} />
          </AntList.Item>
        )}
      />
    );
  }
}

export default Comments;
