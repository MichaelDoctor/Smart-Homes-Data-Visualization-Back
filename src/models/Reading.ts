/* eslint-disable camelcase */
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/dbConfig';

// Reading data types
interface ReadingAttributes extends Model{
  Serial_Number: string;
  DateTime: Date;
  Device_ID: string;
  Device_Name: string | null;
  User_Device_Name: string | null;
  Device_Type: string;
  Device_Make: string | null;
  Device_Model: string | null;
  Device_Location: string | null;
  Wattage: number;
}

// Reading Model
const Reading = sequelize.define<ReadingAttributes>(
  'reading',
  {
    Serial_Number: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
    DateTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Device_ID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Device_Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    User_Device_Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Device_Type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Device_Make: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Device_Model: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Device_Location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Wattage: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);

export default Reading;
