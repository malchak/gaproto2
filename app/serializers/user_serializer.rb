class UserSerializer < ActiveModel::Serializer
	attributes :id, :email, :password, :passwordConfirmation
end