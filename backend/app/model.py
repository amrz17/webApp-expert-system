import numpy as np

# Definisikan struktur jaringan
input_layer_size = 60  # Jumlah pernyataan dalam basis pengetahuan
hidden_layer_size = 10  # Jumlah neuron di lapisan tersembunyi
output_layer_size = 6  # Jumlah tipe RIASEC

# Inisialisasi bobot
W1 = np.random.randn(input_layer_size, hidden_layer_size) * 0.01
W2 = np.random.randn(hidden_layer_size, output_layer_size) * 0.01


# Fungsi aktivasi (sigmoid dan turunannya)
def sigmoid(x):
    return 1 / (1 + np.exp(-x))


def sigmoid_derivative(x):
    return x * (1 - x)


# Fungsi forward propagation
def forward_propagation(X):
    Z1 = np.dot(X, W1)
    A1 = sigmoid(Z1)
    Z2 = np.dot(A1, W2)
    A2 = sigmoid(Z2)
    return Z1, A1, Z2, A2


# Fungsi backpropagation
def backpropagation(X, Y, Z1, A1, Z2, A2):
    global W1, W2
    output_error = Y - A2
    output_delta = output_error * sigmoid_derivative(A2)

    hidden_error = output_delta.dot(W2.T)
    hidden_delta = hidden_error * sigmoid_derivative(A1)

    W2 += A1.T.dot(output_delta) * learning_rate
    W1 += X.T.dot(hidden_delta) * learning_rate


# Proses pembelajaran
def train(X, Y, iterations):
    for i in range(iterations):
        Z1, A1, Z2, A2 = forward_propagation(X)
        backpropagation(X, Y, Z1, A1, Z2, A2)


# Contoh data latih (X: input, Y: output target)
# Harus berbentuk numpy array dengan ukuran yang sesuai

# Misal kita punya 3 sampel data latih
X = np.array(
    [
        [
            1,
            0,
            1,
            0,
            0,
            1,
            1,
            1,
            0,
            0,
            0,
            1,
            1,
            0,
            1,
            0,
            0,
            1,
            0,
            1,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            1,
            0,
            0,
            1,
            1,
            1,
            1,
            0,
            1,
            0,
            1,
            1,
            0,
            1,
            1,
            0,
            1,
            0,
            1,
            1,
            0,
            1,
            1,
            0,
            1,
            1,
            0,
            1,
            0,
            1,
            1,
            0,
            1,
        ],  # Sampel 1
        [
            0,
            1,
            0,
            1,
            1,
            0,
            0,
            0,
            1,
            1,
            1,
            0,
            0,
            1,
            0,
            1,
            1,
            0,
            1,
            0,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            0,
            1,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            1,
            0,
            0,
            1,
            0,
            0,
            1,
            0,
            1,
            0,
            0,
            1,
            0,
            0,
            1,
            0,
            0,
            1,
            0,
            1,
            0,
            0,
            1,
            0,
        ],  # Sampel 2
        [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
        ],  # Sampel 3
    ]
)

# Target output (dalam hal ini, kategori RIASEC)
Y = np.array(
    [
        [1, 0, 0, 0, 0, 0],  # Sampel 1 -> Realistic
        [0, 1, 0, 0, 0, 0],  # Sampel 2 -> Investigative
        [0, 0, 1, 0, 0, 0],  # Sampel 3 -> Artistic
    ]
)

learning_rate = 0.01
iterations = 10000

train(X, Y, iterations)
