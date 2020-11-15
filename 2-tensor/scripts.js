// first tensor
const data = tf.tensor([[1,2], [10,7], [15,27], [24,671]]);

data.print();

// second tensor
const shape = [4,2];

const data2 = tf.tensor([1,2,10,7,15,27,24,671], shape);

data2.print();