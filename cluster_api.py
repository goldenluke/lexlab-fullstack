from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from sklearn.cluster import KMeans

app = Flask(__name__)

def escolher_k(X):
    inertias = []
    K = range(2,6)

    for k in K:
        km = KMeans(n_clusters=k, random_state=42)
        km.fit(X)
        inertias.append(km.inertia_)

    diffs = np.diff(inertias)
    return 2 + int(np.argmin(diffs))

@app.route('/cluster', methods=['POST'])
def cluster():
    data = request.json

    df = pd.DataFrame.from_dict(data, orient='index').fillna(0)

    if df.empty:
        return jsonify({})

    X = df[['taxa','pop']]

    k = min(3, len(df))  # evita erro com poucos dados

    model = KMeans(n_clusters=k, random_state=42)
    df['cluster'] = model.fit_predict(X)

    return jsonify({
        "clusters": df['cluster'].to_dict(),
        "k": k
    })

app.run(port=5000)
