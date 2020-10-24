import React, { Component } from "react";
import { Card, Button } from "antd";
import { connect } from "dva";

const namespace = "puzzlecards";

const mapStateToProps = state => {
  const cardList = state[namespace].data;
  return {
    cardList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickAdd: newCard => {
      const action = {
        type: `${namespace}/addNewCard`,
        payload: newCard
      };
      dispatch(action);
    },
    onDidMount: () => {
      dispatch({
        type: `${namespace}/queryInitCards`
      })
    }
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class PuzzleCardsPage extends Component {
  componentDidMount() {
    // 异步获取数据
    this.props.onDidMount();
  }
  render() {
    return (
      <div>
        {this.props.cardList.map(card => {
          return (
            <Card key={card.id}>
              <div>Q: {card.title}</div>
              <div>
                <strong>A: {card.body}</strong>
              </div>
            </Card>
          );
        })}
        <div>
          <Button
            onClick={() =>
              this.props.onClickAdd({
                title:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                body: "here we use dva"
              })
            }
          >
            添加卡片
          </Button>
        </div>
      </div>
    );
  }
}
