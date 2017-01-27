class Queue
  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue.push(el)
  end

  def dequeue
    @queue.shift
  end

  def show
    p @queue
  end
end

test_queue = Queue.new
test_queue.enqueue(4)
test_queue.enqueue(5)
test_queue.enqueue(6)
test_queue.show
test_queue.dequeue
test_queue.show
