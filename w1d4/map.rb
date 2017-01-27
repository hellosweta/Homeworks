class Map
  def initialize
    @map = []
  end

  def assign(key, value)
    if @map.none? { |kv_pair| kv_pair[0] == key}
      @map << [key,value]
    else
      @map.map do |kv_pair|
        if kv_pair[0] == key
          kv_pair[1] = value
        end
      end
    end
  end

  def lookup(key)
    @map.each do |kv_pair|
      if kv_pair[0] == key
        return kv_pair[1]
      else
        return nil
      end
    end
  end

  def remove(key)
    @map.map { |kv_pair| @map.delete(kv_pair) if kv_pair[0] == key }
  end

  def show
    p @map
  end
end

test_map = Map.new
test_map.assign("cat", 1)
test_map.assign("dog", 2)
test_map.show
p test_map.lookup("cat")
test_map.assign("cat", 3)

test_map.lookup("cat")
test_map.show
test_map.remove("dog")
test_map.show
