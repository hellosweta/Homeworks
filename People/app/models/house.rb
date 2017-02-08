class House < ActiveRecord::Base
  validates :address, :presence => true



  has_many  :residents,
    primary_key: :id,
    foreign_key: :house_id,
    class_name: 'Person'


  # def people
  #   Person.where(house_id: self.id)
  # end
  # has_many writes def people and def people= 

end
