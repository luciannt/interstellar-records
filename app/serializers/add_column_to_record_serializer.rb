class AddColumnToRecordSerializer < ActiveModel::Serializer
  attributes :id, :record, :description, :string
end
