class LRUCache
    def initialize(size)
      @cache = []
      @size = size
    end

    def count
      # returns number of elements currently in cache
      cache.count
    end

    def add(el)
      # adds element to cache according to LRU principle
      if cache.include?(el)
        cache.delete(el)
      elsif count >= @size
      end
      cache.push(el)
    end

    def show
      # shows the items in the cache, with the LRU item first
      p cache
    end

    private
    # helper methods go here!
    attr_reader :cache

  end
