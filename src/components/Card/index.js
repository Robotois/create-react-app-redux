import React from 'react';
import { Card } from 'antd';
import { Tag } from 'antd';
const { Meta } = Card;

export default class Pokemon extends React.Component {
  render() {
    const { item, isLoading } = this.props;
    const dataIsLoading = isLoading || !item.name;

    const image = (item && item.sprites && item.sprites.front_default) || '';
    return (
      <Card
        hoverable={false}
        style={{ width: 240 }}
        loading={dataIsLoading}
        cover={dataIsLoading ? null : <img alt="example" src={image} />}>
        <Meta
          title={item.name}
          description={
            <section>
              <Tag color="cyan">Weight: {item.weight}</Tag>
              <Tag color="blue">Exp: {item.base_experience}</Tag>
            </section>
          }
        />
      </Card>
    );
  }
}
