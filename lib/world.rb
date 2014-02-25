require_relative './cell'

class World
	#keeps track of new cells
	attr_accessor :cells, :board, :tick_ct

	def initialize	
		@rows = 25
		@columns = 25
		@cells = [] 
		@tick_ct = 0
		build_board
	end

	def build_board
		@board = []
		@rows.times do |x|
			@board << []
			@columns.times do |y|
				@board[x] << Cell.new(self, x, y)
				@board[x][y].alive = false
			end
		end
	end

	def display
		nu_board = []
		@board.each_with_index do |row, index|
			nu_board << []
			row.each do |value|
				nu_board[index] << value.alive? ? " * " : " . "
				# print value.alive? ? " * " : " . "
			end
			# puts
		end
		# puts
		return nu_board
	end

	def board_array
		debugger
		nu_board = [][]
		@board.each do |row|
			row.each do |value|
				nu_board[row] << value.alive? ? " * " : " . "
			end
			debugger
		end
	end

	def tick! #cells should be processed through rules
		self.tick_ct += 1 unless self.tick_ct.nil?
		die_array = [] #cells marked for DEATH!!
		alive_array = [] #cells marked to come alive
		cells.each do |cell|
			if cell.neighbors.count < 2 #Rule 1. 
				die_array << cell
			end
			
			if cell.neighbors.count > 3 #Rule 3
				die_array << cell
			end

			if cell.dead? && cell.neighbors.count == 3 #Rule 4
				alive_array << cell
			end
		end
		
		die_array.each {|cell| cell.die!}
		alive_array.each {|cell| cell.born!}
		
		
	end

end
