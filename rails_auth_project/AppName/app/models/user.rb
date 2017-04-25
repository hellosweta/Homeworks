class User < ApplicationRecord
  attr_reader :password
  validates :username, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, presence: { message: "Password can't be blank" }
  before_validation :ensure_session_token

  def self.find_by_credentials(username, password)
    @current_user = User.find_by(username: username)
    return nil if @current_user.nil?
    # BCrypt::Password.new(@current_user.password_digest).is_password?(password)
    @current_user.is_password? ? @current_user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def password=(password_param)
    self.password = password_param
    self.password_digest = BCrypt::Password.create(password_param)
  end

  def is_password?
    BCrypt::Password.new(self.password_digest).is_password?(self.password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
end
