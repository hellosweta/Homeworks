module Toyable
  extend ActiveSupport::Concern

  included do
    has_many :toys, as: :toyable
    # has_many :toys, through: :taggings
    # validates
  end

  def receive_toy(name)
    self.toys.find_or_create_by(name: name)
    # self.toys += toy


    # Next write a #receive_toy(name) method. Any animal instance whose class includes the Toyable concern can call this method. This method should first find or create a toy whose name matches the argument. Next it should add this toy to self's toys. For both steps, you may wish to use the ActiveRecord #find_or_create_by method.

    # After you've created your Toyable concern, go back to your Corgi and Cat models and include your new Toyable concern. You can delete the associations you wrote previously.
  end
end
