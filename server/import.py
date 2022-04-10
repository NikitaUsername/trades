from importlib.metadata import metadata
import inspect
import sqlite3
from pathlib import Path
import pandas as pd
from sqlalchemy import Column, create_engine, inspect, MetaData, Table, Integer, Date, String, Float

Path('./data/trades.db').touch()

metadata = MetaData()

trades = Table('trades', metadata,
               Column('trade_id', Integer, primary_key=True, nullable=False),
               Column('client', String), Column('instrument', String),
               Column('quantity', Integer), Column('direction', String))

engine = create_engine('sqlite:///data/trades.db')
conn = engine.connect()
inspector = inspect(engine)
if not inspector.has_table('trades'):
    metadata.create_all(engine)

deleteQuery = trades.delete()
conn.execute(deleteQuery)

conn = sqlite3.connect('./data/trades.db')
c = conn.cursor()

with open('trades.csv', 'r') as file:
    tradesData = pd.read_csv('trades.csv')
tradesData.to_sql('trades', conn, if_exists='append', index = False)