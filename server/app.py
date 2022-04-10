from pickle import FALSE
from turtle import pos
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
import pandas as pd

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data/trades.db'
db = SQLAlchemy(app)


class Trades(db.Model):
    trade_id = db.Column(db.Integer, primary_key=True)
    client = db.Column(db.String(100))
    instrument = db.Column(db.String(100))
    quantity = db.Column(db.Integer)
    direction = db.Column(db.String(1))


def serializer(trade):
    return{
        'id': trade.trade_id,
        'client': trade.client,
        'instrument': trade.instrument,
        'quantity': trade.quantity,
        'direction': trade.direction
    }

@app.route('/positions', methods=['Get'])
def getPositions():
    trades = Trades.query.all()

    for idx in range(len(trades)):
        if(trades[idx].direction == 'S'):
            trades[idx].quantity = -trades[idx].quantity
    df = pd.DataFrame([*map(serializer, trades)])
    positions = df.groupby(['client', 'instrument'], as_index=False)['quantity'].sum().to_json(orient='records')
    return positions


@app.route('/trades', methods=['Get'])
def getTrades():
    return jsonify([*map(serializer, Trades.query.all())])


if __name__ == '__main__':
    app.run(debug=True)
