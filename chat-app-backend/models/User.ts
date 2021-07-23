import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
    userName: string;
    password: string;
    online: Boolean;
    uid: string;
};

const UserSchema = new Schema<IUser>({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    online: {
        type: Boolean,
        default: true
    }
});

UserSchema.method('toJSON', function () {
    const { __v, _id, password, ...object } = this.toObject();

    object.uid = _id;

    return object;
});

export default model('User', UserSchema);
