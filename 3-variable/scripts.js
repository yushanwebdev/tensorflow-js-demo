// set variable with zeros method
const data = tf.variable(tf.zeros([8]));

data.print();

data.assign(tf.tensor1d([4,12,5,6,56,3,45,1]));

data.print();