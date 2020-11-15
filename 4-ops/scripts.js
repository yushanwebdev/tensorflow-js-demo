// create 2 new 1 dimensional tensors
const data = tf.tensor1d([4, 6, 5, 9]);
const data2 = tf.tensor1d([5, 4, 23, 45]);

// prints
data.print();
data2.print();

// adds and multiplies and prints
data.add(data2).print();
data.mul(data2).print();
