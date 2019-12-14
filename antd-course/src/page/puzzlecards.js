import React, { Component } from "react";
import { Card /* ,Button */ } from "antd";
import { connect } from "dva";

const namespace = "puzzlecards";

const mapStateToProps = state => {
  const cardList = state[namespace];
  return {
    cardList
  };
};

@connect(mapStateToProps)

export default class PuzzleCardsPage extends Component {
  render() {
    return (
      <div>
        {this.props.cardList.map(card => {
          return (
            <Card key={card.id}>
              <div>Q: {card.setup}</div>
              <div>
                <strong>A: {card.punchline}</strong>
              </div>
            </Card>
          );
        })}
        {/* <div>
          <Button onClick={this.addNewCard}> 添加卡片 </Button>
        </div> */}
      </div>
    );
  }
}
