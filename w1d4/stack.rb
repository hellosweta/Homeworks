class Stack
  def initialize
    @stack = []
  end

  def add(el)
    @stack << el
  end

  def remove
    @stack.pop
  end

  def show
    p @stack.dup
  end
end

test_stack = Stack.new
test_stack.add(4)
test_stack.add(5)
test_stack.add(6)
test_stack.show
test_stack.remove
test_stack.show
